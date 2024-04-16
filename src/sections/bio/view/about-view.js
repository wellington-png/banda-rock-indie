'use client';

import BioHero from '../bio-hero';
import BioWhat from '../bio-what';
import BioTeam from '../bio-team';
import BioText from '../bio-text';
import BioVision from '../bio-vision';

// ----------------------------------------------------------------------

export default function BioView() {
  return (
    <>
      <BioHero />

      <BioWhat />

      <BioVision />

      <BioTeam />

      <BioText />
    </>
  );
}
