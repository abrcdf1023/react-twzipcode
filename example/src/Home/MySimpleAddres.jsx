import _map from 'lodash/map'
import React from 'react'
import { Dropdown, Input } from 'semantic-ui-react'
import { withSimpleAddress } from 'react-simple-address'

const MySimpleAddres = ({
  selectedCity,
  selectedDist,
  selectedPostalCode,
  cities,
  dists,
  handleOnCityChange,
  handleOnDistChange,
  handleOnPostalCodeChange,
  ...rest
}) => {
  return (
    <React.Fragment>
      <Dropdown
        selection
        onChange={(e, { value }) => { handleOnCityChange(value) }}
        value={selectedCity}
        placeholder="選擇縣市"
        options={_map(cities, city => ({
          key: city,
          text: city,
          value: city,
        }))}
        {...rest}
      />
      <br />
      <Dropdown
        selection
        onChange={(e, { value }) => { handleOnDistChange(value) }}
        value={selectedDist}
        placeholder="選擇地區"
        options={_map(dists, dist => ({
          key: dist.name,
          text: dist.name,
          value: dist.name,
        }))}
        {...rest}
      />
      <Input value={selectedPostalCode} onChange={(e, { value }) => { handleOnPostalCodeChange(value) }}/>
    </React.Fragment>
  )
}

export default withSimpleAddress(MySimpleAddres)
