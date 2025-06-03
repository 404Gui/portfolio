'use client'

import { usePathname, useRouter } from 'next/navigation'
import { useLocale } from 'next-intl'
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from 'components/ui/select'
import { Globe } from 'lucide-react'
import styles from './LanguageSwitcher.module.css'

export function LanguageSwitcher() {
  const router = useRouter()
  const pathname = usePathname()
  const currentLocale = useLocale()

  const handleChange = (lang) => {
    const newPath = `/${lang}${pathname.substring(3)}`
    router.push(newPath)
  }

  return (
    <Select onValueChange={handleChange} defaultValue={currentLocale}>
      <SelectTrigger className={styles.trigger}>
        <Globe className={styles.icon} />
        <SelectValue placeholder="Idioma" />
      </SelectTrigger>

      <SelectContent className={styles.content}>
        <SelectItem value="pt" className={styles.item}>
          Português
        </SelectItem>
        <SelectItem value="en" className={styles.item}>
          English
        </SelectItem>
      </SelectContent>
    </Select>
  )
}
