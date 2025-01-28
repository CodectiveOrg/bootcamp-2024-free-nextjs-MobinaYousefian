import { ReactElement } from "react";

import ResultComponent from "@/app/search/components/result/result.component";
import GlobalSearchBoxComponent from "@/components/global-search-box/global-search-box.component";
import ActivityTypeFilterComponent from "@/app/search/components/activity-type-filter/activity-type-filter.component";
import FilterSummaryComponent from "@/app/search/components/filter-summary/filter-summary.component";
import CityFilterComponent from "@/app/search/components/city-filter/city-filter.component";
import StatsComponent from "@/app/search/components/stats/stats.component";
// import FiltersCapsuleComponent from "@/app/search/components/mobile-filters/filters-capsule.component";

import FiltersProvider from "@/app/search/providers/filters/filters.provider";
import ActivityProvider from "@/app/search/providers/activity/activity.provider";

import { activity } from "@/lib/data";

import { FiltersType } from "@/types/filters.type";

import styles from "./page.module.css";

type SearchParams = { [key: string]: string | string[] | undefined };

type Props = {
  searchParams: Promise<SearchParams>;
};

export default async function SearchPage({
  searchParams,
}: Props): Promise<ReactElement> {
  const defaultFilters = generateDefaultFilters(await searchParams);

  return (
    <FiltersProvider defaultFilters={defaultFilters}>
      <ActivityProvider activity={activity}>
        <div className={styles.page}>
          <div className={styles.search}>
            <GlobalSearchBoxComponent />
          </div>
          {/*<div className={styles["mobile-filters"]}>*/}
          {/*  <FiltersCapsuleComponent />*/}
          {/*</div>*/}
          <div className={styles.filters}>
            <FilterSummaryComponent />
            <ActivityTypeFilterComponent />
            <CityFilterComponent />
          </div>
          <div className={styles.toolbar}>
            <div className={styles.stats}>
              <StatsComponent />
            </div>
          </div>
          <ResultComponent />
        </div>
      </ActivityProvider>
    </FiltersProvider>
  );
}

function generateDefaultFilters(searchParams: SearchParams): FiltersType {
  const { query, activityType, city } = searchParams;

  return {
    query: normalizeFilter(query),
    activityType: normalizeFilter(activityType),
    city: normalizeFilter(city),
  };
}

function normalizeFilter(
  value: string | string[] | undefined,
): string | undefined {
  if (Array.isArray(value)) {
    return value[0];
  }

  return value;
}
