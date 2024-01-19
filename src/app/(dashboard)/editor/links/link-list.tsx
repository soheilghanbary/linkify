"use client"

import { atomLinks, useLinksAtom } from "@atoms/links.atom"
import {
  closestCenter,
  DndContext,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core"
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable"
import { HydrateAtoms } from "@helpers/atom-hydration"

import { SortableItem } from "./link-item"

const initialLinks = [
  {
    id: 1,
    url: "https://github.com/soheilghanbary",
  },
  {
    id: 2,
    url: "https://twitter.com/soheilghanbary",
  },
  {
    id: 3,
    url: "https://pornhub.com/soheilghanbary",
  },
]

export const LinkList = ({ links }) => {
  return (
    <HydrateAtoms initialValues={[[atomLinks, links]]}>
      <Links />
    </HydrateAtoms>
  )
}

const Links = () => {
  const { links: items, setLinks: setItems } = useLinksAtom()
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  )
  return (
    <div className="mt-2 space-y-3">
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext items={items} strategy={verticalListSortingStrategy}>
          {items.map((link) => (
            <SortableItem key={link.id} {...link} />
          ))}
        </SortableContext>
      </DndContext>
    </div>
  )

  function handleDragEnd(event: any) {
    const { active, over } = event

    if (active.id !== over.id) {
      setItems((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id)
        const newIndex = items.findIndex((item) => item.id === over.id)
        return arrayMove(items, oldIndex, newIndex)
      })
    }
  }
}
