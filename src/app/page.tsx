'use client'
import Image from 'next/image'
import styles from './page.module.css'
import {walkOverData} from "../mock/simple-data";
import {Match, SingleEliminationBracket, SVGViewer} from "@g-loot/react-tournament-brackets";
import useSWR from "swr";
import {useEffect} from "react";

export default function Home() {
    const { data, error, isLoading } = useSWR('/api/user',
        fetch('https://api.challonge.com/v1/tournaments/12858808.json?api_key=qo3OH0FVeZiNeisI0qrincgrrip6gwqv8j0peA2R')
        .then((res) => res.json()))

    useEffect(() => { console.log(data)}, [data]);

  return (
    <main className={styles.main}>
      <SingleEliminationBracket
          matches={walkOverData}
          matchComponent={Match}
          svgWrapper={({ children, ...props }) => (
              <SVGViewer width={1200} height={700} {...props}>
                {children}
              </SVGViewer>
          )}
      />
    </main>
  )
}
