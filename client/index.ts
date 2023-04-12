import { createTRPCProxyClient, httpBatchLink } from '@trpc/client'
import type { AppRouter } from '../trpc'


const main = async () => {
    const mainTag = document.getElementById('main')
    if (!mainTag) return

    const proxy = createTRPCProxyClient<AppRouter>({
        links: [httpBatchLink({url: '/api'})]
    })

    const message = await proxy.greeting.query()
    mainTag.innerHTML = message
}
main()

