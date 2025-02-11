import { ContainerInner, ContainerOuter } from '@/components/Container'

export function Footer() {
  return (
    <footer className="mt-32 flex-none">
      <ContainerOuter>
        <div className="border-t border-zinc-100 pt-10 pb-16 dark:border-zinc-700/40">
          <ContainerInner>
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium text-zinc-800 dark:text-zinc-200">
              </div>
              <p className="text-sm text-zinc-400 dark:text-zinc-500">
                &copy; {new Date().getFullYear()} Matthew Kendon. All rights
                reserved.
              </p>
            </div>
          </ContainerInner>
        </div>
      </ContainerOuter>
    </footer>
  )
}
