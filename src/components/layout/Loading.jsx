import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function CircularIndeterminate({margin}) {
  return (
    <Box sx={{ display: 'flex', justifyContent: "center", marginTop: `${margin}px` }}>
      <CircularProgress color='primary' />
    </Box>
  );
}
