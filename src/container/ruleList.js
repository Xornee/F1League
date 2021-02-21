import React, { useState, useEffect } from 'react';
import {Rule} from '../components';
import * as ROUTES from '../constants/routes';
import TermOfUse from "../constants/regulamin";

export function RuleList({rule}) {
    return (
        <>
            {
                rule.map((p) => {
                    return(
                        <Rule.Text>{p}</Rule.Text>
                    )
                })
            }
        </>
    );
}