import React from 'react';
import AppButton from '../../components/app-button/app-button';
import ButtonGroup from '../../components/button-group/button-group';
import ScreenView from '../../components/screen-view/screen-view';

const LandingScreen = ({navigation}) => {
  return (
    <ScreenView>
      <ButtonGroup>
        <AppButton
          label="Sign in with Phone Number"
          onPress={() => navigation.navigate('PhoneNumber')}
        />
      </ButtonGroup>
    </ScreenView>
  );
};

export default LandingScreen;
