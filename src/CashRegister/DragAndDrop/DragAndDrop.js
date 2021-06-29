import React, { useState } from 'react';
import './dragAndDrop.css';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const cashList = [
    {
      id: "1",
      text: 2,
    },
    {
      id: "2",
      text: 200,
    },
    {
      id: "3",
      text: 100,
    },
    {
      id: "4",
      text: 20,
    },
    {
      id: "5",
      text: 200,
    },
    {
      id: "6",
      text: 5,
    },
  ];
  
  
  
  export default function DragAndDrop() {
    const [elem, setElems] = useState(cashList);

    const reorder = (list, startIndex, endIndex) => {
      const result = [...list];
      const [removed] = result.splice(startIndex, 1);
      result.splice(endIndex, 0, removed);
    
      return result;
    };
   

    return (
      <DragDropContext
        onDragEnd={(result) => {
          const { source, destination } = result;
          if (!destination) {
            return;
          }
          if (
            source.index === destination.index &&
            source.droppableId === destination.droppableId
          ) {
            return;
          }
  
          setElems((totalCash) =>
            reorder(totalCash, source.index, destination.index)
          );
        }}
      >
        <div className="cashList__main--container">
          <h3 className="title__cashList">Cantidad disponible</h3>
          <Droppable droppableId="dropabble__1">
            {(droppableProvided) => (
              <div
                {...droppableProvided.droppableProps}
                ref={droppableProvided.innerRef}
                className="cashList__container"
              >
                {cashList.map((elem, index) => (
                  <Draggable key={elem.id} draggableId={elem.id} index={index}>
                    {(draggableProvided) => (
                      <div
                        {...draggableProvided.draggableProps}
                        ref={draggableProvided.innerRef}
                        {...draggableProvided.dragHandleProps}
                        className="elem__item"
                      >
                        {elem.text}
                        {/* <button>delete</button> */}
                      </div>
                    )}
                  </Draggable>
                ))}
                {droppableProvided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
      </DragDropContext>
    );
  }

