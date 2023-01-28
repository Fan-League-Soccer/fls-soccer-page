import React from 'react'
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  IconButton,
  Link as MuiLink,
  Typography,
} from '@mui/material'
import styled from 'styled-components'
import theme from '../theme'
import { Facebook, Twitter } from '@mui/icons-material'

const ParagraphsStyle = styled(Typography).attrs({
  variant: 'body1',
})`
  > p {
    margin: ${theme.spacing(4, 0)};
  }
`

const ImageContainer = styled.div`
  margin: 1.5rem 1.25rem;

  > img {
    width: 100%;
    height: 225px;
  }
`

export default function MainPage() {
  return (
    <Container maxWidth="md" sx={{ padding: (theme) => theme.spacing(12, 0) }}>
      <Box
        component="section"
        sx={{
          borderTopRightRadius: (theme) => theme.spacing(3),
          borderTopLeftRadius: (theme) => theme.spacing(3),
          px: 6,
          py: 3,
          backgroundColor: (theme) => theme.palette.grey[100],
        }}
      >
        <Typography variant="h3" style={{ textAlign: 'center' }}>
          Fan League Soccer
        </Typography>
        <ImageContainer>
          <img src={'/logo.svg'} alt={'Fan league soccer logo'} />
        </ImageContainer>
        <ParagraphsStyle>
          <Typography variant={'body1'}>Fan League Soccer is a live soccer league where fans join the team.</Typography>

          <Typography variant={'body1'}>
            The club’s most important decision making will be left in the hands of fans. In an era where sports are
            drifting further and further away from those who love the game Fan League Soccer will become the best way
            for fans to express their passion for soccer.
          </Typography>
          <Typography variant={'body1'}>
            Fan League Soccer will be a unique, user-friendly interactive experience that allows fans to take control of
            a real-life soccer club. Fans will get behind the scenes access and make decisions that affect the team.
          </Typography>
          <Typography variant={'body1'}>
            Fan League Soccer is a new and unique opportunity for all fans to embrace the beautiful game once again.
            Become a part of your team and revolutionize soccer.
          </Typography>
        </ParagraphsStyle>

        <Button
          variant="contained"
          fullWidth
          href={'https://forms.gle/2zX2m4czZ4it3Kzs9'}
          target={'_blank'}
          sx={{ color: 'white', my: 4 }}
        >
          Subscribe to our newsletter
        </Button>
      </Box>

      <Box
        component="section"
        sx={{
          px: 6,
          py: 3,
          backgroundColor: (theme) => theme.palette.grey[100],
        }}
      >
        <Typography variant="h4">Media</Typography>
        <ParagraphsStyle>
          <Typography variant="body1">
            We are doing twitter spaces every other week usually about topics related to US soccer organization. Below
            are some episodes we recorded. In the future we plan to expand this section with similar information content
            from other reporters.
          </Typography>

          <Card sx={{ maxWidth: 345 }}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Berhalter / Reyna affair
              </Typography>
              <Typography variant="body2" color="text.secondary">
                27 tuned in - Jan 17 - 31:26
              </Typography>
            </CardContent>
            <CardMedia component="img" height="200" width="50" image="/logo.svg" alt="Fan league soccer logo" />
            <CardActions>
              <Button
                size="small"
                color="primary"
                href={'https://twitter.com/i/spaces/1eaKbrXZBzYKX?s=20'}
                target={'_blank'}
              >
                Go to episode
              </Button>
            </CardActions>
          </Card>
        </ParagraphsStyle>
      </Box>

      <Box
        component="footer"
        sx={{
          px: 6,
          py: 3,
          mt: 'auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: (theme) =>
            theme.palette.mode === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
          borderBottomLeftRadius: (theme) => theme.spacing(3),
          borderBottomRightRadius: (theme) => theme.spacing(3),
        }}
      >
        <Typography variant="body2" color="text.primary" sx={{ px: 'auto' }}>
          {'Copyright © '}
          <MuiLink color="inherit" href="https://fanleaguesoccer.com">
            Fan League Soccer
          </MuiLink>{' '}
          {new Date().getFullYear()}
          {'.'}
        </Typography>
        <div>
          <MuiLink href={'https://www.facebook.com/FanLeagueSoccer'} target="_blank">
            <IconButton target="_blank" fontSize="large" component={Facebook} />
          </MuiLink>

          <MuiLink href={'https://twitter.com/FanLeagueSoccer'} target="_blank">
            <IconButton fontSize="large" component={Twitter} />
          </MuiLink>
        </div>
      </Box>
    </Container>
  )
}
