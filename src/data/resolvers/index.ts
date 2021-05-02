export type Image = {
  alt: string
  url: string
}

export interface PageInterface {
  id: string
  uid: string
  tags: string[]
  lang: string
  url: string
  title: string
  subtitle: string
  body: any[]
  bg: string
  featuredImage: Image
}

export const pageResolver = (node: any): PageInterface => ({
  id: node.id,
  uid: node.uid,
  tags: node.tags,
  lang: node.lang,
  url: node.url,
  title: node.data.page_title.text,
  subtitle: node.data.subtitle,
  body: node.data.body,
  bg: node.tags.find((tag: string) => tag.includes('bg-')) ?? 'bg-yellow',
  featuredImage: node.data.featured_image,
})

export interface MenuInterface {
  tags: string[]
  id: string
  pages: PageInterface[]
}

export const menuResolver = (node: any): MenuInterface => ({
  id: node.id,
  tags: node.tags,
  pages: node.data.pages.map((item: any) => pageResolver(item.page.document)),
})

export type SocialMediaPlatform = 'facebook' | 'instagram'

export interface ContactInformationInterface {
  email: string
  socialMedia: {
    platform: SocialMediaPlatform
    url: string
  }[]
}

export const contactInformationResolver = (
  node: any
): ContactInformationInterface => ({
  email: node.data.email,
  socialMedia: node.data.social_media.map(
    (item: { platform: string; link: { url: string } }) => ({
      platform: item.platform,
      url: item.link.url,
    })
  ),
})

export interface MemberInterface {
  name: {
    text: string
    html: string
  }
  portrait: Image
  role: string
  website: {
    url: string
    label: string
  }
  bio: {
    text: string
    html: string
  }
}

export const memberResolver = (node: any): MemberInterface => ({
  name: node.data.name,
  bio: node.data.bio,
  portrait: node.data.portrait,
  role: node.data.role,
  website: {
    url: node.data.website_url.url,
    label: node.data.website_label,
  },
})

export interface ProjectInterface {
  id: string
  uid: string
  tags: string[]
  lang: string
  url: string
  title: {
    text: string
    html: string
  }
  shortDescription: {
    text: string
    html: string
  }
  type: string
  featuredImage: Image
  bg: string
  body: any[]
}

export const projectResolver = (node: any): ProjectInterface => ({
  id: node.id,
  uid: node.uid,
  tags: node.tags,
  lang: node.lang,
  url: node.url,
  title: node.data.title,
  shortDescription: node.data.short_description,
  type: node.data.type,
  bg: 'bg-red',
  body: node.data.body,
  featuredImage: node.data.featured_image,
})
