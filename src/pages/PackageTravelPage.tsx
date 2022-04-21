import React, { Fragment } from 'react';
import { PackageTravel } from '../PackageTravel';
import { Bill } from '../Bill';
import { Items } from '../Items';
import { ItemSelected } from '../ItemSelected';
import { DestinationSearcher } from '../DestinationSearcher';

export const PackageTravelPage: React.FC = () => {
  return (
    <Fragment>
      <DestinationSearcher />
      <Items />
      <ItemSelected />
      <section>
        <PackageTravel />
        <Bill />
      </section>
    </Fragment>
  );
};
