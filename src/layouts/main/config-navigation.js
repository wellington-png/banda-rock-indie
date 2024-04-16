import { paths } from 'src/routes/paths';

import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export const navConfig = [
  {
    title: 'Home',
    icon: <Iconify icon="solar:home-2-bold-duotone" />,
    path: '/',
  },
  {
    title: 'Bio',
    icon: <Iconify icon="solar:home-2-bold-duotone" />,
    path: '/bio',
  },
  {
    title: 'Discografia',
    icon: <Iconify icon="solar:home-2-bold-duotone" />,
    path: '/discografia',
  },
  {
    title: 'Galeria',
    icon: <Iconify icon="solar:home-2-bold-duotone" />,
    path: '/galeria',
  },
  {
    title: 'Agenda',
    icon: <Iconify icon="solar:home-2-bold-duotone" />,
    path: '/agenda',
  },
  {
    title: 'Shop',
    icon: <Iconify icon="solar:home-2-bold-duotone" />,
    path: paths.product.root,
  },
  // {
  //   title: 'Pages',
  //   path: '/pages',
  //   icon: <Iconify icon="solar:file-bold-duotone" />,
  //   children: [
  //     {
  //       subheader: 'Other',
  //       items: [
  //         { title: 'About us', path: paths.about },
  //         { title: 'Contact us', path: paths.contact },
  //         { title: 'FAQs', path: paths.faqs },
  //         { title: 'Pricing', path: paths.pricing },
  //         { title: 'Payment', path: paths.payment },
  //         { title: 'Maintenance', path: paths.maintenance },
  //         { title: 'Coming Soon', path: paths.comingSoon },
  //       ],
  //     },
  //     {
  //       subheader: 'Concepts',
  //       items: [
  //         { title: 'Shop', path: paths.product.root },
  //         { title: 'Product', path: paths.product.demo.details },
  //         { title: 'Checkout', path: paths.product.checkout },
  //         { title: 'Posts', path: paths.post.root },
  //         { title: 'Post', path: paths.post.demo.details },
  //       ],
  //     },
  //     {
  //       subheader: 'Auth Demo',
  //       items: [
  //         { title: 'Login', path: paths.authDemo.classic.login },
  //         { title: 'Register', path: paths.authDemo.classic.register },
  //         {
  //           title: 'Forgot password',
  //           path: paths.authDemo.classic.forgotPassword,
  //         },
  //         { title: 'New password', path: paths.authDemo.classic.newPassword },
  //         { title: 'Register (modern)', path: paths.authDemo.modern.register },
  //       ],
  //     },
  //   ],
  // },
];
