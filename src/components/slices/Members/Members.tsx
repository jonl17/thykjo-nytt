import React from 'react'
import { MemberInterface } from '@src/data/resolvers'
import Icon from '@cmp/site/Icon'
import Feature from '@cmp/site/Feature'

type Props = {
  members: MemberInterface[]
  title: string
}

const Members = ({ members, title }: Props) => {
  return (
    <>
      <div className='members slice-gap position-relative w-100'>
        <div className='d-flex flex-column align-items-center mb-4'>
          <h2 className='text-center mb-2'>{title}</h2>
          <Icon type='line' />
        </div>
        <div>
          {members.map((member, i) => (
            <Feature
              onRenderMedia={() => (
                <img
                  className='w-100'
                  src={member.portrait.url}
                  alt={member.portrait.alt}
                  style={{ objectFit: 'cover' }}
                />
              )}
              imageRight={i % 2 === 0}
              key={i}
            >
              <div className='w-100'>
                <h3 className='mb-1'>{member.name.text}</h3>
                <h4 className='mb-2'>{member.role}</h4>
                <div dangerouslySetInnerHTML={{ __html: member.bio.html }} />
              </div>
            </Feature>
          ))}
        </div>
      </div>
    </>
  )
}

export default Members
