import styled from 'styled-components';
import { makeStyles } from '@mui/styles';

// import { styled } from '@mui/material/styles';

// const FormInput = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(2),
//   color: theme.palette.text.secondary,
// }));

const useStyles = makeStyles((theme: any) => {
  return {
    inputText: {
      width: '100%',
      marginBottom: 20,
      height: '40px',
    },
    input: {
      fontSize: '1.6rem',
      color: '#1A1B1C',
      height: '40px',
    },
  
    buttonSubmit: {
      height: '40px',
      width: '100%',
      fontSize: '1.7rem',
    },
  }
});
  
  const Form = styled.form`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 0 auto;
  `;
  
  export { Form, useStyles };
