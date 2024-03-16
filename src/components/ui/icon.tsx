import { icons, LucideProps } from 'lucide-react'

export type IconName = keyof typeof icons

type IconType = LucideProps & {
  name: IconName
}

export function Icon(props: IconType) {
  const { name, ...rest } = props
  const Component = icons[name]

  return <Component {...rest} />
}
