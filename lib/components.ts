import Pre from "@/components/ui/pre"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Card from "@/components/markup/card"
import CardGrid from "@/components/markup/cardgrid"
import { FileTree } from "@/components/markup/dynamic-filetree"
import { File, Folder } from "@/components/markup/filetree"
import RoutedLink from "@/components/markup/link"
import Mermaid from "@/components/markup/mermaid"
import Note from "@/components/markup/note"
import { Step, StepItem } from "@/components/markup/step"

export const components = {
  a: RoutedLink as React.ComponentType<
    React.AnchorHTMLAttributes<HTMLAnchorElement>
  >,
  Card,
  CardGrid,
  FileTree,
  Folder,
  File,
  Mermaid,
  Note,
  pre: Pre,
  Step,
  StepItem,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
}
