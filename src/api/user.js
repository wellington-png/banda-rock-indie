import useSWR from 'swr';
import { useMemo } from 'react';

import { fetcher, endpoints } from 'src/utils/axios';


export function useGetPosts() {
    const URL = endpoints.post.list;

    const { data, isLoading, error, isValidating } = useSWR(URL, fetcher);

    const memoizedValue = useMemo(
        () => ({
            posts: data?.posts || [],
            postsLoading: isLoading,
            postsError: error,
            postsValidating: isValidating,
            postsEmpty: !isLoading && !data?.posts.length,
        }),
        [data?.posts, error, isLoading, isValidating]
    );

    return memoizedValue;
}