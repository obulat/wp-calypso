/* eslint-disable wpcalypso/jsx-classname-namespace */
/**
 * External dependencies
 */
import * as React from 'react';
import { ArrowButton } from '@automattic/onboarding';
import { useI18n } from '@automattic/react-i18n';

/**
 * Internal dependencies
 */
import WrappingComponent from './suggestion-item-wrapper';

interface Props {
	onClick: () => void;
}

const UseYourDomainItem: React.FunctionComponent< Props > = ( { onClick } ) => {
	const { __, _x } = useI18n();

	return (
		<WrappingComponent
			type="button"
			className="domain-picker__suggestion-item type-link"
			onClick={ onClick }
		>
			<div className="domain-picker__suggestion-item-name">
				<span className="domain-picker__domain-wrapper with-margin with-bold-text">
					{ __( 'Already own a domain?', __i18n_text_domain__ ) }
				</span>
				<div>
					<span className="domain-picker__item-tip">
						{ _x(
							"You can use it as your site's address.",
							'Upgrades: Register domain description',
							__i18n_text_domain__
						) }
					</span>
				</div>
			</div>
			<ArrowButton arrow="right">
				{ _x(
					'Use a domain I own',
					'Domain transfer or mapping suggestion button',
					__i18n_text_domain__
				) }
			</ArrowButton>
		</WrappingComponent>
	);
};

export default UseYourDomainItem;
