import React, { useEffect, useState } from 'react';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import searchCategories from '../../repositories/categories';
import PageDefault from '../../components/PageDefault';

interface InitialData {
  id: number;
  name: string;
  description: string;
  color: string;
  videos: [
    {
      title: string;
      categoryId: number;
      url: string;
    }
  ];
}

const Home = () => {
  const [initialData, setInitialData] = useState<InitialData[]>([]);
  useEffect(() => {
    searchCategories()
      .then((res) => {
        setInitialData(res);
      })
      .catch((_) => {
        console.log(_);
        alert('Erro na requisição dos vídeos');
      });
  }, []);
  return (
    <div style={{ backgroundColor: '#141414' }}>
      <PageDefault hasPadding={true}>
        {initialData.length > 0 && (
          <>
            <BannerMain
              videoTitle={initialData[0].videos[0].title}
              url={initialData[0].videos[0].url}
              videoDescription={'Descrição'}
            />

            {initialData.map((category, index) => {
              const isIgnoring = index === 0 ? true : false;
              return (
                <Carousel
                  ignoreFirstVideo={isIgnoring}
                  category={category}
                  key={category.id}
                />
              );
            })}
          </>
        )}
      </PageDefault>
    </div>
  );
};
export default Home;
