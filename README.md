# Úkol pro Whys

Úkolem je připravit projekt, kde bude jedna stránka která má vykreslit článek a komentáře k němu. Komentáře se musí vykreslit až po vykreslení článku a jsou seřazeny od nejnovějšího nahoře.

Napiš to v Reactu tak, jak to umíš. Pokud možno, piš to funkcionálně (ne class komponenty). Můžeš nám napsat do emailu cokoliv, co tě napadlo během psaní a jak se to většinou řeší v produkčním kódu a proč.

Jak to má vypadat:

- vytvoř dvě komponenty, jedna vykreslí článek a druhá komentáře
- vytvoř komponentu `Application` která vykreslí ty dvě komponenty a ještě tlačítko pro načtení dalších komentářů (zobraz až po získání a vykreslení komentářů)
- komponenta `Application` bude získávat data (článek, komentáře, další komentáře)
- simuluj získání dat asynchronním kódem (zobrazí se po nějaké době)
- data jsou definovana v `app.html`, dostupné globálně

Pokyny:

- kód by měl běžet v Chrome 80 a novější
- jak si poradíš se styly je na tobě a uvítáme, když si s tím pohraješ
- kód musí být čitelný a dobře fungovat
- počítej s případným rozšířením projektu, ale ať je kód zároveň přiměřeně jednoduchý vůči zadání
- v souboru `README.md` sepiš jak projekt rozjet
- Finální projekt nám pošli jako `GitHub` (nebo Gitlab atp.) repozitář.


Задача состоит в том, чтобы подготовить проект, где будет одна отображаться статья и комментариев к ней.
Комментарии должны отображаться только после отображения статьи, и они сортируются по дате

Напишите это в React так, как вы можете. Если возможно, напишите его функционально (не компоненты класса). Вы можете отправить нам по электронной почте все, о чем вы подумали в процессе написания, и как это обычно обрабатывается в производственном коде и почему.

Как это должно выглядеть:

- создайте два компонента, один из которых отображает статью, а другой - комментарии +
- создайте компонент `Application`, который отображает два компонента и кнопку для загрузки дополнительных комментариев 
(показывать после получения и рендеринга комментариев)
- компонент `Application` будет получать данные (статья, комментарии, другие комментарии)
- имитировать сбор данных с помощью асинхронного кода (появится через некоторое время)
- данные определены в приложении.html, доступный по всему миру
- 
Инструкции:

- код должен запускаться в Chrome 80 и более поздних версиях
- как вы справляетесь со стилями, зависит от вас
- код должен быть читабельным и хорошо работать
- рассчитывайте на возможное расширение проекта, но в то же время пусть код будет достаточно простым для ввода
- в файле README.md напишите, как начать проект
- Отправьте нам окончательный проект в виде репозитория GitHub (или Gitlab и т.д.).