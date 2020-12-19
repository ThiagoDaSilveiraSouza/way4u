import styled from 'styled-components'

export const BannerSection = styled.section`
  background-image: url('./assets/banner/banner-home.jpg');
  background-size: cover;
  background-position: center auto;
  background-repeat: no-repeat;
  background-color: var(--red-color);
  height: 100%;
  min-height: fit-content;
  padding: 50px 0;
  .centralizer {
    position: relative;
    height: fit-content;
    display: flex;
    flex-direction: column;
    overflow-x: hidden;
    justify-content: flex-start;
    img {
      width: 100%;
    }
  }
`
