import React, {useState, useEffect} from 'react'

import {RouteActionType} from '@wepublish/karma.run-react'

import {
  RouteType,
  useRoute,
  useRouteDispatch,
  PeerListRoute,
  PeerCreateRoute,
  PeerEditRoute,
  routeLink,
  PeerInfoEditRoute,
  IconButtonLink
} from '../route'

import {
  usePeerListQuery,
  usePeerProfileQuery,
  useDeletePeerMutation,
  PeerListDocument,
  PeerListQuery
} from '../api'

import {IconButtonTooltip} from '../atoms/iconButtonTooltip'

import {PeerEditPanel} from '../panel/peerEditPanel'

import {Trans, useTranslation} from 'react-i18next'
import {
  Drawer,
  FlexboxGrid,
  List,
  Avatar,
  Icon,
  IconButton,
  Button,
  Divider,
  Modal,
  Alert,
  HelpBlock
} from 'rsuite'
import {DescriptionList, DescriptionListItem} from '../atoms/descriptionList'
import {NavigationBar} from '../atoms/navigationBar'
import {PeerInfoEditPanel} from '../panel/peerProfileEditPanel'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const ListItemLink = routeLink(List.Item)
const ButtonLink = routeLink(Button)

type Peer = NonNullable<PeerListQuery['peers']>[number]

export function PeerList() {
  const {current} = useRoute()
  const dispatch = useRouteDispatch()

  const [isPeerProfileEditModalOpen, setPeerProfileEditModalOpen] = useState(
    current?.type === RouteType.PeerProfileEdit
  )

  const [isEditModalOpen, setEditModalOpen] = useState(current?.type === RouteType.PeerProfileEdit)

  const [editID, setEditID] = useState<string | undefined>(
    current?.type === RouteType.AuthorEdit ? current.params.id : undefined
  )

  const [isConfirmationDialogOpen, setConfirmationDialogOpen] = useState(false)
  const [currentPeer, setCurrentPeer] = useState<Peer>()

  const {
    data: peerInfoData,
    loading: isPeerInfoLoading,
    error: peerInfoError
  } = usePeerProfileQuery({fetchPolicy: 'network-only'})

  const {data: peerListData, loading: isPeerListLoading, error: peerListError} = usePeerListQuery({
    fetchPolicy: 'network-only',
    errorPolicy: 'ignore'
  })

  const [deletePeer, {loading: isDeleting}] = useDeletePeerMutation()

  const {t} = useTranslation()

  useEffect(() => {
    const error = peerInfoError?.message ?? peerListError?.message
    if (error) Alert.error(error, 0)
  }, [peerInfoError, peerListError])

  useEffect(() => {
    switch (current?.type) {
      case RouteType.PeerProfileEdit:
        setPeerProfileEditModalOpen(true)
        break

      case RouteType.PeerCreate:
        setEditID(undefined)
        setEditModalOpen(true)
        break

      case RouteType.PeerEdit:
        setEditID(current.params.id)
        setEditModalOpen(true)
        break
    }
  }, [current])

  const peers = peerListData?.peers?.map((peer, index) => {
    const {id, name, profile, hostURL} = peer

    return (
      <ListItemLink
        key={name}
        index={index}
        route={PeerEditRoute.create({id})}
        style={{cursor: 'pointer'}}>
        <FlexboxGrid>
          <FlexboxGrid.Item
            colspan={2}
            style={{
              textAlign: 'center'
            }}>
            <Avatar
              circle
              src={profile?.logo?.squareURL || undefined}
              alt={profile?.name?.substr(0, 2)}
            />
          </FlexboxGrid.Item>
          <FlexboxGrid.Item colspan={21}>
            <h5>{name}</h5>
            <p>
              {profile && `${profile.name} - `}
              {hostURL}
            </p>
          </FlexboxGrid.Item>
          <FlexboxGrid.Item colspan={1} style={{textAlign: 'center'}}>
            <IconButtonTooltip caption={t('peerList.overview.delete')}>
              <IconButton
                disabled={isPeerInfoLoading}
                icon={<Icon icon="trash" />}
                circle
                size="sm"
                onClick={e => {
                  e.preventDefault()
                  setConfirmationDialogOpen(true)
                  setCurrentPeer(peer)
                }}
              />
            </IconButtonTooltip>
          </FlexboxGrid.Item>
        </FlexboxGrid>
      </ListItemLink>
    )
  })

  return (
    <>
      <h5>{t('peerList.overview.myPeerProfile')}</h5>
      <div style={{border: 'solid 2px #3498ff', padding: '10px', borderRadius: '5px'}}>
        <NavigationBar
          centerChildren={
            <div style={{textAlign: 'center'}}>
              <Avatar
                size="lg"
                circle
                style={{border: 'solid 2px #3498ff'}}
                src={peerInfoData?.peerProfile?.logo?.squareURL || undefined}
                alt={peerInfoData?.peerProfile?.name?.substr(0, 2)}
              />
              <h5>{peerInfoData?.peerProfile.name || t('peerList.panels.unnamed')}</h5>
              <p>{peerInfoData?.peerProfile.hostURL}</p>
              <HelpBlock>
                <Trans i18nKey={'peerList.panels.checkOwnPeerProfileHelpBlock'}>
                  text{' '}
                  <a
                    href="https://wepublish.ch/peering-infos-preview/"
                    target="_blank"
                    rel="noreferrer"
                  />
                </Trans>
              </HelpBlock>
            </div>
          }
          rightChildren={
            <IconButtonTooltip caption={t('peerList.overview.editProfile')}>
              <IconButtonLink
                size="lg"
                appearance="link"
                icon={<Icon icon="cog" />}
                circle={true}
                route={PeerInfoEditRoute.create({})}
              />
            </IconButtonTooltip>
          }
        />
      </div>

      <FlexboxGrid>
        <FlexboxGrid.Item colspan={24}>
          <Divider />
        </FlexboxGrid.Item>
        <FlexboxGrid.Item colspan={16}>
          <h2>{t('peerList.overview.peers')}</h2>
        </FlexboxGrid.Item>
        <FlexboxGrid.Item colspan={8} style={{textAlign: 'right'}}>
          <ButtonLink
            appearance="primary"
            disabled={isPeerListLoading}
            route={PeerCreateRoute.create({})}>
            {t('peerList.overview.newPeer')}
          </ButtonLink>
        </FlexboxGrid.Item>
      </FlexboxGrid>
      <div style={{marginTop: '20px'}}>
        {peerListData?.peers?.length ? (
          <List>{peers}</List>
        ) : !isPeerListLoading ? (
          <p>{t('peerList.overview.noPeersFound')}</p>
        ) : null}
      </div>

      <Drawer
        show={isPeerProfileEditModalOpen}
        size={'sm'}
        onHide={() => {
          setPeerProfileEditModalOpen(false)
          dispatch({
            type: RouteActionType.PushRoute,
            route: PeerListRoute.create({}, current ?? undefined)
          })
        }}>
        <PeerInfoEditPanel
          onClose={() => {
            setPeerProfileEditModalOpen(false)
            dispatch({
              type: RouteActionType.PushRoute,
              route: PeerListRoute.create({}, current ?? undefined)
            })
          }}
        />
      </Drawer>

      <Drawer
        show={isEditModalOpen}
        size={'sm'}
        onHide={() => {
          setEditModalOpen(false)
          dispatch({
            type: RouteActionType.PushRoute,
            route: PeerListRoute.create({})
          })
        }}>
        {peerInfoData?.peerProfile.hostURL && (
          <PeerEditPanel
            id={editID}
            hostURL={peerInfoData.peerProfile.hostURL}
            onClose={() => {
              setEditModalOpen(false)

              dispatch({
                type: RouteActionType.PushRoute,
                route: PeerListRoute.create({})
              })
            }}
            onSave={() => {
              setEditModalOpen(false)

              Alert.success(
                editID ? t('peerList.panels.peerUpdated') : t('peerList.panels.peerCreated'),
                2000
              )

              dispatch({
                type: RouteActionType.PushRoute,
                route: PeerListRoute.create({})
              })
            }}
          />
        )}
      </Drawer>

      <Modal show={isConfirmationDialogOpen} onHide={() => setConfirmationDialogOpen(false)}>
        <Modal.Header>
          <Modal.Title>{t('peerList.panels.deletePeer')}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <DescriptionList>
            <DescriptionListItem label={t('peerList.panels.name')}>
              {currentPeer?.name || t('peerList.panels.unknown')}
            </DescriptionListItem>
          </DescriptionList>
        </Modal.Body>
        <Modal.Footer>
          <Button
            disabled={isDeleting}
            color="red"
            onClick={async () => {
              if (!currentPeer) return
              await deletePeer({
                variables: {id: currentPeer.id},
                update: cache => {
                  const query = cache.readQuery<PeerListQuery>({
                    query: PeerListDocument
                  })

                  if (!query) return

                  cache.writeQuery<PeerListQuery>({
                    query: PeerListDocument,
                    data: {
                      peers: query.peers?.filter(peer => peer.id !== currentPeer.id)
                    }
                  })
                }
              })
              setConfirmationDialogOpen(false)
            }}>
            {t('peerList.panels.confirm')}
          </Button>
          <Button onClick={() => setConfirmationDialogOpen(false)} appearance="subtle">
            {t('peerList.panels.cancel')}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
