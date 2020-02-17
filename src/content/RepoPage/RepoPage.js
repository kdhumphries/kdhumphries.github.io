import React, { useState } from 'react';
import RepoTable from './RepoTable';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';
import { DataTableSkeleton, Pagination } from 'carbon-components-react';

const REPO_QUERY = gql`
  query REPO_QUERY {
     launchesPast(limit: 50) {
      mission_name
      launch_date_local
      launch_site {
        site_name_long
      }
      rocket {
        rocket_name
        rocket_type
      }
      id
    }
  }
`;

const headers = [
  {
    key: 'mission_name',
    header: 'Name',
  },
  {
    key: 'launch_date_local',
    header: 'Launch date',
  },
  //{
  //  key: 'launch_site.site_name_long',
  //  header: 'Launch site',
  //},
  //{
  //  key: 'rocket.rocket_name',
  //  header: 'Rocket',
  //},
];

//const LinkList = ({ name, type }) => (
//  <ul style={{ display: 'flex' }}>
//    <li>
//      {name}
//    </li>
//    {type && (
//      <li>
//        <span>&nbsp;|&nbsp;</span>
//        {type}
//      </li>
//    )}
//
//  </ul>
//);

const getRowItems = rows =>
  rows.map(row => ({
    ...row,
    key: row.id,
    launch_date_local: new Date(row.launch_date_local).toLocaleDateString(),
    description: row.launch_site.site_name_long,
  }));

const RepoPage = () => {
  const [totalItems, setTotalItems] = useState(0);
  const [firstRowIndex, setFirstRowIndex] = useState(0);
  const [currentPageSize, setCurrentPageSize] = useState(5);

  return (
    <div className="bx--grid bx--grid--full-width bx--grid--no-gutter repo-page">
      <div className="bx--row repo-page__r1">
        <div className="bx--col-lg-16">
          <Query query={REPO_QUERY}>
            {({ loading, error, data: { launchesPast } }) => {
              // Wait for the request to complete
              if (loading)
                return (
                  <DataTableSkeleton
                    columnCount={headers.length + 1}
                    rowCount={5}
                    headers={headers}
                  />
                );

              // Something went wrong with the data fetching
              if (error) return `Error! ${error.message}`;

              // If we're here, we've got our data!
              const dataLength = launchesPast.length;
              setTotalItems(dataLength);
              const rows = getRowItems(launchesPast);

              return (
                <>
                  <RepoTable
                    headers={headers}
                    rows={rows.slice(
                      firstRowIndex,
                      firstRowIndex + currentPageSize
                    )}
                  />
                  <Pagination
                    totalItems={totalItems}
                    backwardText="Previous page"
                    forwardText="Next page"
                    pageSize={currentPageSize}
                    pageSizes={[5, 10, 15, 25]}
                    itemsPerPageText="Items per page"
                    onChange={({ page, pageSize }) => {
                      if (pageSize !== currentPageSize) {
                        setCurrentPageSize(pageSize);
                      }
                      setFirstRowIndex(pageSize * (page - 1));
                    }}
                  />
                </>
              );
            }}
          </Query>
        </div>
      </div>
    </div>
  );
};

export default RepoPage;
