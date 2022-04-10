import React, { Fragment } from 'react';
import { PackageTravel } from '../PackageTravel';
import { Bill } from '../Bill';
import { Items } from '../Items';
import { ItemSelected } from '../ItemSelected';
import { DestinationSearcher } from '../DestinationSearcher';

type PackageTravelPageProps = {};

export const PackageTravelPage: React.FC = ({}: PackageTravelPageProps) => {
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
