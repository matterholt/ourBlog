import client, { previewClient } from './client'

const getUniquePosts = (posts) => {
  const slugs = new Set()
  return posts.filter((post) => {
    if (slugs.has(post.slug)) {
      return false
    } else {
      slugs.add(post.slug)
      return true
    }
  })
}

const postFields = `
  _id,
  name,
  title,
  'date': publishedAt,
  body,
  'slug': slug.current,
  'coverImage': mainImage,
  'author': author->{name, 'picture': image.asset->url},
`

const getClient = (preview) => (preview ? previewClient : client)

export async function getAllPostsForHome(preview) {
  const results = await getClient(preview).fetch(`*[_type == "post"] | order(publishedAt desc){
            ${postFields}
        }`)
  return getUniquePosts(results)
}
