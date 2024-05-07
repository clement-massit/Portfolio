<script>
  import {
    Tabs,
    TabItem,
    Card,
    TimelineItem,
    Timeline,
    Button,
    Li,
    List,
    ListgroupItem,
  } from "flowbite-svelte";
  import {
    UserCircleSolid,
    OpenBookSolid,
    BriefcaseSolid,
    UserAddOutline,
    MailBoxSolid,
    PhoneSolid,
    GridSolid,
    AdjustmentsVerticalSolid,
    ClipboardSolid,
    ArrowRightOutline,
  } from "flowbite-svelte-icons";
</script>

<Tabs
  style="underline"
  contentClass="p-4 bg-shakespeare-100 rounded-lg dark:bg-gray-800 mt-4"
  defaultClass="flex flex-wrap space-x-2 text-shakespeare-950 border-none"
>
  <TabItem open>
    <div
      slot="title"
      class="flex items-center gap-2 hover:text-shakespeare-950"
    >
      <UserCircleSolid size="sm" />
      Profile
    </div>

    <p class="text-sm text-gray-500 dark:text-gray-400">
      Junior Data Scientist at the University of Bordeaux - BPH
      <br />
      Fixed-term contract, Feb 2024 - Jan 2025
    </p>
  </TabItem>
  <TabItem>
    <div
      slot="title"
      class="flex items-center gap-2 hover:text-shakespeare-950"
    >
      <OpenBookSolid size="sm" />
      Education
    </div>
    <Timeline class="overflow-y-auto h-52">
      <TimelineItem
        title="Tallinn University of Technology - TALTECH"
        date="Sept 2022 - Jan 2023"
      >
        <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
          Exchange program with Erasmus (Tallinn, Estonia)
          <br />
          <List>
            <ListgroupItem>Cybersecurity risks management</ListgroupItem>
            <ListgroupItem>OSINT</ListgroupItem>
            <ListgroupItem
              >Digital twin projects (maritime cybersecurity introduction)</ListgroupItem
            >
          </List>
        </p>
        <!-- <Button color="alternative">
          Learn more
          <ArrowRightOutline class="ml-2 w-3 h-3" />
        </Button> -->
      </TimelineItem>
      <TimelineItem
        title="Polytech Annecy-Chambéry - IDU - Data Science"
        date="2020-2023"
      >
        <p class="text-base font-normal text-gray-500 dark:text-gray-400">
          Engineering school located in Annecy (74, France)
          <br />
          <List>
            <ListgroupItem>Web development</ListgroupItem>
            <ListgroupItem>Database management</ListgroupItem>
            <ListgroupItem>Cybersecurity</ListgroupItem>
            <ListgroupItem>Machine & Deep learning</ListgroupItem>
            <ListgroupItem>Big data</ListgroupItem>
          </List>
        </p>
      </TimelineItem>
      <TimelineItem
        title="Ferdinand Buisson (Voiron, 38, France)"
        date="2018-2020"
      >
        <p class="text-base font-normal text-gray-500 dark:text-gray-400">
          Preparatory class in physics and engineering sciences
        </p>
      </TimelineItem>
    </Timeline>
  </TabItem>
  <TabItem>
    <div
      slot="title"
      class="flex items-center gap-2 hover:text-shakespeare-950"
    >
      <BriefcaseSolid size="sm" />
      Experiences
    </div>
    <Timeline class="overflow-y-auto h-60 divide-y divide-blue-200">
      <TimelineItem
        title="University of Bordeaux - BPH Bordeaux Population Health - AHEAD"
        date="Feb 2024 - Jan 2025"
      >
        <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
          Data Scientist
          <br />
          Adapt and implement Transformer-type (LLM) algorithms for the automatic
          classification of very large databases derived from emergency call reports
          to the SAMU center 15.
          <br />
          Participate in the analysis of data related to emergency rescue interventions
          over the past 15 years regarding the impact of medication consumption on
          the risk of trauma
          <br />
        </p>

        <List>
          <ListgroupItem>Machine & Deep learning</ListgroupItem>
          <ListgroupItem>Database implementation</ListgroupItem>
          <ListgroupItem>App development</ListgroupItem>
        </List>
      </TimelineItem>
      <TimelineItem
        title="ALPhANOV - Internship in artificial intelligence & cloud computing"
        date="Mar 2023 - Aug 2023"
      >
        <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
          Research center in Bordeaux (33, France)
          <br />
          Analysis and classification of alcohol spectra by a connected device in
          real time
          <br />
        </p>
        <List>
          <ListgroupItem>Machine & Deep learning</ListgroupItem>
          <ListgroupItem>Cloud environment (AWS)</ListgroupItem>
          <ListgroupItem>Web development</ListgroupItem>
        </List>
      </TimelineItem>
      <TimelineItem
        title="LISTIC LABORATORY - Internship as a laboratory engineer"
        date="Apr 2022 - July 2022"
      >
        <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
          Computer science laboratory in Annecy (74, France)
          <br />
          Soil classification using satellite images (TimeSeries) & study of attention
          mechanism
          <br />
        </p>
        <List>
          <ListgroupItem>Deep learning</ListgroupItem>
          <ListgroupItem>Development</ListgroupItem>
        </List>
      </TimelineItem>
    </Timeline>
  </TabItem>
  <TabItem>
    <div
      slot="title"
      class="flex items-center gap-2 hover:text-shakespeare-950"
    >
      <UserAddOutline size="sm" />
      Contacts
    </div>
    <p class="text-sm text-gray-500 dark:text-gray-400">
      <List>
        <ListgroupItem>
          <div class="flex items-center gap-2">
            <MailBoxSolid size="sm" />clement.massit@gmail.com
          </div>
        </ListgroupItem>
        <ListgroupItem>
          <div class="flex items-center gap-2">
            <PhoneSolid size="sm" /> +33670653560
          </div>
        </ListgroupItem>
      </List>
    </p>
  </TabItem>
</Tabs>
