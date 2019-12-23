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
  let { path } = useRouteMatch() as any;
  const master = <props.MasterType {...props.masterProps} data-test="Master" />;
  const detail = <props.DetailType {...props.detailProps} data-test="Detail" />;

  return (
    <Media query="(max-width: 599px)">
      {(matches: any) =>
        matches ? (
          <Switch>
            <Route exact path={`${path}`}>
              {master}
            </Route>
            <Route path={`${path}/detail/:id`}>{detail}</Route>
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
                <Route path={`${path}/detail/:id`}>{detail}</Route>
              </Switch>
            </section>
          </section>
        )
      }
    </Media>
  );
};
