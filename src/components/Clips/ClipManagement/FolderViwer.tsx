import { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import {
  FolderType,
  getAllFolder,
  getChildFolder,
  getFolderData,
  createFolder,
} from '@src/api/Normal/Folder';
import { FcFolder, FcOpenedFolder } from 'react-icons/fc';
import { MdKeyboardArrowRight, MdKeyboardArrowDown } from 'react-icons/md';
import Modal from '@src/components/Common/Modal';
import CreateFolderModal from '@src/components/Clips/ClipManagement/CreateFolderModal';

const FolderViwer = () => {
  const [folders, setFolders] = useState<FolderType[]>([]);
  const [childFolders, setChildFolders] = useState<FolderType[]>([]);
  const [currentFolderId, setCurrentFolderId] = useState<number | null>(null);
  const [isOpenModal, setIsOpenModal] = useState(false);

  useEffect(() => {
    try {
      const getFetch = async () => {
        const res = await getAllFolder();
        setFolders(res.data);
      };
      getFetch();
    } catch (error) {
      alert(error);
    }
  }, []);

  const handleChildFolder = async (id: number) => {
    try {
      if (currentFolderId === id) {
        setCurrentFolderId(null);
        return;
      }
      const res = await getChildFolder(id);
      setCurrentFolderId(id);
      setChildFolders(res.data);
    } catch (error) {
      alert(error);
    }
  };

  const handleCreateFolder = async (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    ParentNode: FolderType,
  ) => {
    try {
      e.preventDefault();
      setIsOpenModal((prev) => !prev);
      // const res = await createFolder(ParentNode);
      // console.log(res);
    } catch (error) {
      alert(error);
    }
  };

  const closeModal = () => {
    setIsOpenModal(false);
  };

  return (
    <>
      <Modal open={isOpenModal} onClose={closeModal}>
        <CreateFolderModal parentFolderId={currentFolderId} onClose={closeModal} />
      </Modal>

      <FolderViewerContainer>
        <Title>Folders</Title>
        {folders.map((folder) => (
          <div key={folder.id}>
            <Node
              key={folder.id}
              onClick={() => handleChildFolder(folder.id)}
              onContextMenu={(e) => handleCreateFolder(e, folder)}
            >
              <MdKeyboardArrowRight />
              <FcFolder size={20} />
              {folder.name}
            </Node>
            {currentFolderId === folder.id &&
              childFolders.map((childFolder) => (
                <div key={childFolder.id}>
                  {folder.id === childFolder.p_id && (
                    <ChildNode
                      onClick={() => handleChildFolder(folder.id)}
                      onContextMenu={(e) => handleCreateFolder(e, folder)}
                    >
                      <MdKeyboardArrowDown />
                      <FcOpenedFolder size={20} />
                      {childFolder.name}
                    </ChildNode>
                  )}
                </div>
              ))}
          </div>
        ))}
      </FolderViewerContainer>
    </>
  );
};

const FolderViewerContainer = styled.div`
  padding: 1rem;
  background-color: ${({ theme }) => theme.palette.cnps.realWhite};
  border: 1px solid #777777;
  border-radius: 0.375rem;
`;

const Title = styled.div`
  font-weight: bolder;
  margin-bottom: 8px;
`;

const Node = styled.div`
  width: 10rem;
  height: 24px;
  display: flex;
  align-items: center;
  gap: 4px;
  margin-left: 4.8px;
  cursor: pointer;
  :hover {
    background-color: #f3f9f7;
  }
`;

export const ChildNode = styled(Node)`
  padding: 0 11.2px;
`;

export default FolderViwer;
