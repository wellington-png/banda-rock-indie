'use client';


import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { useGetProducts } from 'src/api/product';

import { useSettingsContext } from 'src/components/settings';

import ProductList from '../product-list';
import CartIcon from '../common/cart-icon';
import { useCheckoutContext } from '../../checkout/context';


// ----------------------------------------------------------------------

export default function ProductShopView() {
  const settings = useSettingsContext();

  const checkout = useCheckoutContext();

  const { products, productsLoading } = useGetProducts();


  return (
    <Container
      maxWidth={settings.themeStretch ? false : 'lg'}
      sx={{
        mb: 15,
      }}
    >
      <CartIcon totalItems={checkout.totalItems} />

      <Typography
        variant="h4"
        sx={{
          my: { xs: 3, md: 5 },
        }}
      >
        Shop
      </Typography>

      <ProductList products={products} loading={productsLoading} />
    </Container>
  );
}
