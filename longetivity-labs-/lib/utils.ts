import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getProjectRoot(): string {
  if (typeof window !== 'undefined') {
    return '/'
  }
      return process.cwd()
}
