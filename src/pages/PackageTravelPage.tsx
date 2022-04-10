import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { PackageTravel } from '../PackageTravel';
import { Bill } from '../Bill';
import { Items } from '../Items';
import { ItemSelected } from '../ItemSelected';
import { DestinationSearcher } from '../DestinationSearcher';
import { RootState } from '../store';

type PackageTravelPageProps = {};

export const PackageTravelPage: React.FC = ({}: PackageTravelPageProps) => {
  const packageTravel = useSelector((state: RootState) => state.packageTravel);
  console.log(packageTravel);
  return (
    <Fragment>
      <DestinationSearcher />
      <Items />
      <ItemSelected />
      <section>
        <PackageTravel {...packageTravel} />
        <Bill />
      </section>
    </Fragment>
  );
};
