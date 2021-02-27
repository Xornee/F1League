import React from 'react';
import {Rule} from '../components';
import TermOfUse from "../constants/regulamin";

export function RulesContainer() {

    return (
        <Rule>
            {
                TermOfUse.map(rule => {
                    return(
                        <>
                            <Rule.MainTitle>{rule.name}</Rule.MainTitle>
                            <>
                                {
                                    rule.section.map((p) => {

                                        return(
                                            <>
                                                <Rule.RulesTitle>{p.displayName ? p.name : null}</Rule.RulesTitle>
                                                <>
                                                    {
                                                        p.values.map((a) => {
                                                            return(
                                                            <Rule.Text>{a}</Rule.Text>
                                                            );
                                                        })
                                                    }
                                                </>
                                            </>
                                        )
                                    })
                                }
                            </>
                        </>
                    )
                })
            }
        </Rule>
    );
}