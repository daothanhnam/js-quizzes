

import  { useState, useEffect } from "react";
import styled from "styled-components";
import {  ImagesResponse } from "../../types/pictures.type";

const apiUrl = "https://picsum.photos/v2/list?page=2&limit=9";

async function fetchImages(): Promise<ImagesResponse> {
  const response = await fetch(apiUrl);
  const data = await response.json();
  return data;
}


const Wrapper = styled.div`
  text-align: center;
 
`;

const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin-top: 20px;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

function Picture() {
  const [images, setImages] = useState<ImagesResponse | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const imagesData = await fetchImages();
        setImages(imagesData);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <Wrapper>
      <ImageGrid>
        {images?.map((image) => (
          <Image key={image.id} src={image.download_url} alt={image.author} />
        ))}
      </ImageGrid>
    </Wrapper>
  );
}


export default Picture;
