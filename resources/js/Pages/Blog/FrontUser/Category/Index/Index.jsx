import Header from '@/Components/Blog/Header/Header'
import ContainerContent from '@/Components/Container/ContainerContent'
import BlogLayout from '@/Layouts/Blog/BlogLayout'
import React from 'react'

export default function Index(props) {
    const category = props.category
  return (
      <div>
          <Header>
              
          </Header>
          {/* Content */}
          <div>
              <ContainerContent title_content={'Category'} deskripsi={'Silahkan memilih kategory pelajaran yang anda inginkan'}>
                  {category ? category.map((item, key) => 
                      <ContainerContent.Kontent title={item.name} teaser={item.teaser} routes={route('category.show', item.slug)} timeShow={false} countArticleShow={'true'} key={key} />
                  ) : <p>Belum ada data yang ditambahkan</p>}
              </ContainerContent>
          </div>
    </div>
  )
}
Index.layout = (page) => <BlogLayout children={page}/>
