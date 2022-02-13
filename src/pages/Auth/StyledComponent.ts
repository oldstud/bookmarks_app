import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const FormWrapper = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  }));


  export { FormWrapper }