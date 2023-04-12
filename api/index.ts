import { fetchRequestHandler } from '@trpc/server/adapters/fetch'
import { appRouter } from '../trpc'

export const config = {
    runtime: 'edge'
}


export default function handler(req: Request) {
    return fetchRequestHandler({
        req,
        endpoint: '/api',
        router: appRouter,
        createContext: () => ({})
    })
}
