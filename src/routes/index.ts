import routes from "~/config/routes";
import Home from "~/pages/home";
import DetailMovie from "~/pages/detail";
import SignInPage from "~/pages/signin";
import SignUpPage from "~/pages/signup";
import DefaultLayout from "~/layouts/defaultLayout";
import ActorPage from "~/pages/actor";
import SeriesPage from "~/pages/series";
import MoviePage from "~/pages/movie";

const publicRoutes = [
  {
    path: routes.home,
    component: Home,
    layout: DefaultLayout,
  },
  {
    path: routes.detail,
    component: DetailMovie,
    layout: DefaultLayout,
  },
  {
    path: routes.actor,
    component: ActorPage,
    layout: DefaultLayout,
  },
  {
    path: routes.series,
    component: SeriesPage,
    layout: DefaultLayout,
  },
  {
    path: routes.movie,
    component: MoviePage,
    layout: DefaultLayout,
  },
  {
    path: routes.signIn,
    component: SignInPage,
    layout: null,
  },
  {
    path: routes.signUp,
    component: SignUpPage,
    layout: null,
  },
];

export { publicRoutes };
