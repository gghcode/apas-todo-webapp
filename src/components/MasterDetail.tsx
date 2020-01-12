import React from 'react';
import Media from 'react-media';
import { Route, Switch, useRouteMatch } from 'react-router-dom';

export interface MasterDetailProps {
  MasterType: any;
  masterProps: any;
  DetailType: any;
  detailProps: any;
}

export const MasterDetail: React.FC<MasterDetailProps> = (props) => {
  const { path } = useRouteMatch();

  const master = <props.MasterType {...props.masterProps} data-test="Master" />;
  const detail = <props.DetailType {...props.detailProps} data-test="Detail" />;
  const detailPath = 'detail';
  console.log(path);
  return (
    <Media query="(max-width: 599px)">
      {(matches: boolean) =>
        matches ? (
          <Switch>
            <Route exact path={`${path}`}>
              {master}
            </Route>
            <Route path={`${path}/${detailPath}/:id`}>{detail}</Route>
          </Switch>
        ) : (
          <section>
            <section>
              <Route path={`${path}`}>{master}</Route>
            </section>
            <section>
              <Switch>
                <Route exact path={`${path}`}>
                  {detail}
                </Route>
                <Route path={`${path}/${detailPath}/:id`}>{detail}</Route>
              </Switch>
            </section>
          </section>
        )
      }
    </Media>
  );
};
