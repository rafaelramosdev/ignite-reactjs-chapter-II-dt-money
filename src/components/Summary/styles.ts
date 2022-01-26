import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  margin-top: -10rem;

  div {
    background: var(--shape);
    color: var(--text-title);

    padding: 1.5rem 2rem;

    border-radius: 0.25rem;

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    strong {
      display: block; // default is 'inline' so 'margin-top' doesn't work, when 'block', makes 'strong' behave as if it were a 'div' 
      margin-top: 1rem;

      font-size: 2rem;
      font-weight: 500;
      line-height: 3rem;
    }

    &:last-child {
      background: var(--green);
      color: #ffffff;
    }
  }
`