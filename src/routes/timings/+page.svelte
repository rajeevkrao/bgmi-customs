<script lang='ts'>
	import Button from "../../components/Button.svelte";
  import { Label, Input, Select, Heading, P } from "flowbite-svelte";
  import { getNotificationsContext } from 'svelte-notifications';
  import axios from 'axios';
  
  const { addNotification } = getNotificationsContext();

  let ign:string = "";
  let selectedHour:any = 6;
  let selectedMinute:any = 0;
  const formSubmition = async (event:any) => {
    const form = {ign, hour:selectedHour, minute:selectedMinute};
    
    axios.post('/api/timings/addPlayer', form).then((res:any) => {
      addNotification({
      type: 'success',
      text: 'Thank you for your Time Suggestion!',
      position: 'bottom-right',
      removeAfter: 5000,
    })  
    }).catch((err:any) => {
      addNotification({
      type: 'error',
      text: 'Problem submitting suggestion',
      position: 'bottom-right',
      removeAfter: 5000,
    })
    })
  }
  

  let hours = [
    {value:6, name: "6"},
    {value:7, name: "7"},
    {value:8, name: "8"},
    {value:9, name: "9"},
    {value:10, name: "10"},
  ]

  let minutes = [
    {value:0, name: "00"},
    {value:15, name: "15"},
    {value:30, name: "30"},
    {value:45, name: "45"},

  ]

  

</script>

<main>
  <div class="header"><Heading tag="h3">This Survey will help us to conduct BGMI Customs when you are available</Heading></div>
  <form class="form" on:submit|preventDefault={formSubmition}>
    <Label>
      <Heading tag="h5">
        Please Enter your In Game Name.
      </Heading>
      <div class="input">
        <Input required  type="text" placeholder="*In Game Name" bind:value={ign}/>
      </div>
    </Label>
    <Label>
      <Heading tag="h5">
        Please select the time you will be available to play BGMI Customs everyday.
      </Heading>
    <div class="timing align-middle grid gap-4 grid-cols-3">
      <Select placeholder="Select Hour" class="mt-2" items={hours} bind:value={selectedHour} />
      <Select placeholder="Select Minute" class="mt-2" items={minutes} bind:value={selectedMinute} />
      <P style="margin:auto 0">PM</P>
    </div>
    </Label>
    <div class="button">
    <Button type="submit">Submit</Button>
    </div>
  </form>
  
</main>

<style scoped>
  main {
    text-align: center;
  }
  .header {
    margin-bottom: 1rem;
  }

  .timing {
    margin: 0 auto;
    text-align: left;
    width: 20rem;
  }
  .form > .button {
    margin: 1rem 0;
  }

  .form .input {
    margin: 0 auto;
    max-width:60rem;
  }

</style>