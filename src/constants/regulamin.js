const TermOfUse = [
    {
      _id: '1',
      name: 'Regulamin Discord',
      section: [
        {
          name: "Postawienia Ogólne",
          displayName : true,
          values: [
              "a)	Nieznajomość regulaminu nie zwalnia z jego przestrzegania",
              "b)	Administracja ma prawo zmienić treść regulaminu tylko wtedy gdy każdy kierowca zostanie poinformowany."
          ]
        },
        {
          name: "Zasady kanałów tekstowych",
          displayName : true,
          values: [
              "a)	Zakaz używania wulgaryzmów.",
              "b)	Zakaz wykorzystywania, oszukiwania i szantażowania innych użytkowników. ",
              "c)	Zabroniony jest wszelkiego rodzaju trolling oraz inne formy zachowań antyspołecznych. ",
              "d)	Zakaz obrażania graczy, administracji i serwera oraz działania na ich szkody. ",
              "e)	Zakaz reklamowania jakichkolwiek serwerów zewnętrznych: gier, stron www, serwerów discord itp. bez pisemnej zgody administracji.",
              "f)	Zakaz wykorzystywania możliwych błędów na serwerze. Należy je natychmiast bezzwłocznie zgłosić administracji z zachowaniem poufności wobec osób trzecich. ",
              "g)	Zakazane jest poruszanie tematów wulgarnych/erotycznych/religijnych/rasistowskich/politycznych itp",
              "h)	Podszywanie się pod graczy będzie karane kickiem, następnie banem. Podszywanie się pod administrację będzie skutkowało natychmiastowym banem. ",
              "i)	Używanie tzw. multikont jest surowo zakazane i wykrycie takiej sytuacji przez administrację będzie skutkowało banem konta drugiego jak i głównego.",
              "j)	Zakaz używania komendy TTS osobom nie należącym do administracji.",
              "k)	Zabronione jest wysyłanie linków lub plików zawierających jakiekolwiek treści wulgarne/rasistowskie/pornograficzne/religijne itp. oraz plików szkodliwych (wirusy). "
            ]
        }
      ]      
    },
    {
        _id: '2',
        name: 'Sekcja Wyścigowa',
        section: [
          {
            name: "Pierwszy akapit sekcji",
            displayName : false,
            values: [
                "1) Tryb gry: Nierankingowy",
                "2) Bolidy: Oficjalne F1 2020",
                "3) Rodzaj Treningu : Brak",
                "4) Kwalifikacje: Kwalifikacje krótkie",
                "5) Długość wyścigu: 50%",
                "6) Rozpoczęcie wyścigu: Manualne",
                "7) Okrążenie formujące: Włączone",
                "8) Pogoda: Dynamiczna (w przypadku restartu ustawiana jest identyczna pogoda co w sesji restartowanej)",
                "9) Czas: Oficjalny",
                "10) Poziom kierowcy SI: 80",
                "11) Osiągi samochodów: Równe",
                "12) Reguła Parku Zamkniętego: Włączona",
                "13) Kolizje: Włączone",
                "14) Uszkodzenia pojazdu: Pełne",
                "15) Własne ustawienia bolidu: Włączone",
                "16) Samochód Bezpieczeństwa: Włączony",
                "17) Zasady i flagi: Włączone",
                "18) Ograniczenia ścinania zakrętów: Rygorystyczne",
                "19) Dostępne asysty: Wszystkie poza Asystą DRS, Wspomaganie paliwa, Wspomaganie w boksach"
            ]
          },
          {
            name: "Harmonogram Sezonu",
            displayName : true,
            values: [
                "- Wyścigi odbywają się w czwartki o 20:10.",
                "- Kwalifikacje rozpoczynają się punktualnie o 20:10."
              ]
          },
          {
            name: "punkty",
            displayName : false,
            values: [
                "3. Data wyścigu może zostać zmieniona wtedy i tylko wtedy, gdy większość zawodników wyrazi na to zgodę poprzez głosowanie.",
                "4. Sesja zostaje założona przez administratora bądź przez osobę wyznaczoną przez administratora na 15 minut przed rozpoczęciem sesji kwalifikacyjnej.",
                "5. Kierowca ma obowiązek posiadania takiego samego nicku na Discordzie jak i na Steamie."
            ]
          },
        ]      
    },
    {
        _id: '3',
        name: 'Nieobecnosci',
        section: [
          {
            name: "punkty",
            displayName : false,
            values: [
                "a)	Każda nieobecność kierowcy powinna być zgłoszona w przeznaczonym do tego miejscu.",
                "b)	Po 2 niezgłoszonych nieobecnościach zawodnik zostaje skreślony z listy kierowców.",
                "c)	Kierowca jest zobowiązany do zgłoszenia swojej nieobecności do 2 godzin przed rozpoczęciem wyścigu.",
            ]
          },
        ]      
    },
    {
        _id: '4',
        name: 'Sędziowie',
        section: [
          {
            name: "punkty",
            displayName : false,
            values: [
                'a)	Kierowcy na zgłaszanie skarg mają czas do 3 dni po zakończeniu wyścigu.',
                'b)	Każde zgłoszenie musi być zawarte w osobnej wiadomości (jeśli mamy 3 zgłoszenia piszemy 3 wiadomości)',
                'c)	Skargi będą rozpatrywane tylko i wyłącznie wtedy gdy zawierają dowód w postaci nagrania wideo lub screenshota z gry.',
                'd)	Sędziowie podczas rozpatrywania zgłoszeń będą się posługiwali regulaminem CRC  link - https://docs.google.com/document/d/1gSjxL3tkASkfGEwGStw_Bd1gaTQeK09xy-CPQe46btY/edit?usp=sharing',
                'e)	Aby sędzia mógł rozpatrzyć zgłoszenie nie może brać udziału w wyścigu, z którego dane zgłoszenie pochodzi.',
                'f)	Sędziowie mają prawo usuwać kary czasowe niesłusznie przyznane przez grę.',
                'g)	Sędziowie mogą ukarać kierowcę karą czasową, punktami karnymi (gdzie 8 punktów karnych to wykluczenie z wyścigu a 16 to wykluczenie z aktualnego i następnego sezonu), wykluczeniem z kwalifikacji w następnym wyścigu lub po prostu ostrzeżeniem (2 ostrzeżenia w ciągu 3 wyścigów równać się będą 1pkt. karnemu)',
                'h)	Jeśli w incydencie brać udział będzie kierowca, który ma lagi to werdykt będzie bardziej przychylny kierowcy bez lagów)',
                'i)	Użycie ,,Powrotu na tor" jest surowo zakazane i będzie skutkować karą 20s',
                'j)	Wszelkie zdarzenia spowodowane przez prowadzenie pojazdu przez Bota będą rozpatrywane identycznie jak inne zgłoszenia',
                'k)	Za wykluczenie innego kierowcy podczas okrążenia formującego przewidziana jest kara 5s (lub 1pkt karny jeśli kara czasowa nie będzie mieć wpływu na wynik końcowy) od każdego wykluczonego kierowcy',
                'l)	Podczas okrążenia formującego obowiązują takie same zasady co podczas SC',
                'm)	Jeśli nastąpi kolizja podczas SC, która będzie skutkować karą dla kierowcy jadącego z przodu to kara może zostać przeniesiona na kierowcę powodującego kolizję ',
                'n)	Kierowca ma prawo zgłosić innego kierowcę nie trzymającego się zasad kwalifikacji (wyjazd na złej mieszance opon czyt. Sucho-Inter, Wet), w takiej sytuacji sędzia ma prawo przyznać surową karę kierowcy łamiącemu zasady.'
            ]
          },
        ]      
    },
    {
        _id: '5',
        name: 'Restarty sesji',
        section: [
          {
            name: "punkty",
            displayName : false,
            values: [
                'a)	Restarty odbywają się tylko za zgodą administratora lub osoby odpowiedzialnej za dany split.',
                'b)	Restarty odbywają się tylko za zgodą administratora lub osoby odpowiedzialnej za dany split.',
                'c)	Restart sesji może dojść do skutku, jeśli znacząca liczba kierowców ma problemy lub jeśli na raz z sesji wyrzuci 4 lub więcej osób',
                'd)	Wypadek spowodowany błędem sesji u jednego z kierowców nie jest podstawą do restartowania sesji.'
            ]
          },
        ]      
    },
    {
        _id: '6',
        name: 'System Punktowy',
        section: [
          {
            name: "punkty",
            displayName : false,
            values: [
                'a)	W lidze obowiązuje taki sam system punktowy jak w Formule 1, który wygląda następująco:',
                '1. miejsce - 25 punktów',
                '2. miejsce - 18 punktów.',
                '3. miejsce - 15 punktów',
                '4. miejsce - 12 punktów',
                '5. miejsce - 10 punktów',
                '6. miejsce - 8 punktów',
                '7. miejsce - 6 punktów',
                '8. miejsce - 4 punkty',
                '9. miejsce - 2 punkty',
                '10. miejsce - 1 punkt',
                'b)	Punkt za najszybsze okrążenie (FL) zostaje przyznany osobie, która podczas wyścigu osiągnie najlepszy czas na pojedynczym kółku (osoba ta musi znajdować się w Top 10 na mecie wyścigu)',
                'c)	Aby kierowca został sklasyfikowany w wynikach wyścigu musi przejechać co najmniej 90% jego dystansu.',
                'd)	W przypadku gdy kierowca nie zostanie sklasyfikowany nie otrzymuje on punktów.',
                'e)	Jeśli zostanie przejechane 85% dystansu i nastąpi błąd sesji wyniki zostają sklasyfikowane na ostatnim okrążeniu przed zbugowaniem sesji.',
                'f)	Jeśli zostanie przejechane 50% dystansu i nastąpi błąd sesji wyniki zostają sklasyfikowane na ostatnim okrążeniu przed zbugowaniem sesji a punkty zostaną podzielone na pół (nie dotyczy punktu za FL)'
            ]
          },
        ]      
    },
  ]
export default TermOfUse