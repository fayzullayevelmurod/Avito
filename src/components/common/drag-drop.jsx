import React, { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { Box, Flex, Image } from "@chakra-ui/react";
import assets from "../../assets";
import "./index.css";

const initialStores = [
  {
    id: "0e2f0db1-5457-46b0-949e-8032d2f9997a",
    name: assets.avitoAuto1,
    tint: 1,
    items: [],
  },
  {
    id: "487f68b4-1746-438c-920e-d67b7df46247",
    name: assets.avitoAuto2,
    tint: 2,
    items: [],
  },
  {
    id: "25daffdc-aae0-4d73-bd31-43f73101e7c0",
    name: assets.avitoAuto3,
    tint: 3,
    items: [],
  },
  {
    id: "487f68b4-1746-438c-920e-d67b7df4624e",
    name: assets.avitoAuto4,
    tint: 4,
    items: [],
  },
  {
    id: "25daffdc-aae0-4d73-bd31-43f73101e7cz",
    name: assets.avitoAuto5,
    tint: 5,
    items: [],
  },
];

export const DragDropComponent = () => {
  const [stores, setStores] = useState(initialStores);

  const handleDragAndDrop = (results) => {
    const { source, destination, type } = results;

    if (!destination) return;

    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    )
      return;

    if (type === "group") {
      const reorderedStores = [...stores];

      const storeSourceIndex = source.index;
      const storeDestinatonIndex = destination.index;

      const [removedStore] = reorderedStores.splice(storeSourceIndex, 1);
      reorderedStores.splice(storeDestinatonIndex, 0, removedStore);

      return setStores(reorderedStores);
    }
    const itemSourceIndex = source.index;
    const itemDestinationIndex = destination.index;

    const storeSourceIndex = stores.findIndex(
      (store) => store.id === source.droppableId
    );
    const storeDestinationIndex = stores.findIndex(
      (store) => store.id === destination.droppableId
    );

    const newSourceItems = [...stores[storeSourceIndex].items];
    const newDestinationItems =
      source.droppableId !== destination.droppableId
        ? [...stores[storeDestinationIndex].items]
        : newSourceItems;

    const [deletedItem] = newSourceItems.splice(itemSourceIndex, 1);
    newDestinationItems.splice(itemDestinationIndex, 0, deletedItem);

    const newStores = [...stores];

    newStores[storeSourceIndex] = {
      ...stores[storeSourceIndex],
      items: newSourceItems,
    };
    newStores[storeDestinationIndex] = {
      ...stores[storeDestinationIndex],
      items: newDestinationItems,
    };

    setStores(newStores);
  };

  return (
    <div className="layout__wrapper">
      <Flex>
        <DragDropContext onDragEnd={handleDragAndDrop}>
          <div className="header"></div>
          <Droppable droppableId="ROOT" type="group">
            {(provided) => (
              <Flex
                flexWrap="wrap"
                gap="13px"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {stores.map((store, index) => (
                  <StoreDraggable key={store.id} store={store} index={index} />
                ))}
                {provided.placeholder}
              </Flex>
            )}
          </Droppable>
        </DragDropContext>
      </Flex>
    </div>
  );
};

const StoreDraggable = ({ store, index }) => (
  <Draggable draggableId={store.id} index={index}>
    {(provided) => (
      <div
        {...provided.dragHandleProps}
        {...provided.draggableProps}
        ref={provided.innerRef}
      >
        <StoreList {...store} />
      </div>
    )}
  </Draggable>
);

const StoreList = ({ name, items, id }) => (
  <Droppable droppableId={id}>
    {(provided) => (
      <div {...provided.droppableProps} ref={provided.innerRef}>
        <Box bgColor="#E2E8F0" borderRadius='8px'>
          <Image
            src={name}
            width="87px"
            height="87px"
            border="2px solid #e6def7"
            borderRadius="8px"
          />
        </Box>
        <div className="items-container">{provided.placeholder}</div>
      </div>
    )}
  </Droppable>
);
