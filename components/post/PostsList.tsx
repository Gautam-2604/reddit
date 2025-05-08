import { getPosts } from '@/sanity/lib/post/getPosts'
import { currentUser } from '@clerk/nextjs/server'
import React from 'react'

const PostsList = async () => {
    const posts = await getPosts()
    const user = currentUser()
  return (
    <div>
      
    </div>
  )
}

export default PostsList
