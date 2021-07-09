import { Card, CardContent, Grid, Typography } from '@material-ui/core'
import { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import http from '../http'
import { Route, routes } from './model'

interface RouteListPageProps {
  routes: Route[]
}

const RoutesListPage: NextPage<RouteListPageProps> = ({routes}) => {
  return (
    <div>
      <Head>
        <title>Listagem de rotas</title>
      </Head>
      <Typography component="h1" variant="h3" gutterBottom>
        Rotas
      </Typography>
      <Grid container spacing={4}>
        {routes.map((route, key) => (
          <Grid key={key} item xs={12} sm={6} md={4}>
            <Card>
              <CardContent>
                <Typography component="h2" variant="h5" gutterBottom>
                  {route.title}
                </Typography>
                <Typography component="h3" variant="h6" gutterBottom>
                  Posição inicial
                </Typography>
                <Typography component="h5" variant="h6" gutterBottom>
                  latitude: {route.startPosition.latitude}
                </Typography>
                <Typography component="h5" variant="h6" gutterBottom>
                  longitude: {route.startPosition.longitude}
                </Typography>
                <Typography component="h3" variant="h6" gutterBottom>
                  Posição final
                </Typography>
                <Typography component="h5" variant="h6" gutterBottom>
                  latitude: {route.endPosition.latitude}
                </Typography>
                <Typography component="h5" variant="h6" gutterBottom>
                  longitude: {route.endPosition.longitude}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default RoutesListPage;

export const getServerSideProps: GetServerSideProps<RouteListPageProps> = async (context) => {
  const {data: routes} = await http.get('routes');
  return {
    props: {
      routes
    }
  }
}