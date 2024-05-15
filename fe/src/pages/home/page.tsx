import { Component, createSignal, onMount } from "solid-js";
import hero_logo from "../../public/images/party.png"
import styles from "./Home.module.css"
import { TiTick } from "solid-icons/ti"
import { HiSolidHandThumbUp } from 'solid-icons/hi'
import { BiSolidDirections } from 'solid-icons/bi'
import { A } from "@solidjs/router"

const HomePage: Component = () => {
    const [loaded, setLoaded] = createSignal(false);
    onMount(() => setTimeout(() => {
        setLoaded(true)
    }, 1000))
    return (
        <>
        <img src={hero_logo} alt="logo" class={"max-h-80 w-screen object-cover"} />
        <div class="page_container">
            <div class="text-4xl text-center">Welcome to Let's Hang Out!</div>
            <div class={styles.app_description}>Scheduling gatherings with your peers could be a pain in the ass, especially for those with packed schedules.</div>
            <div class={styles.app_description}>Throwing available timeslots into chats seems messy, what if something helps you visualize them?</div>
            <div class={styles.app_description}>Use Let's Hang Out, a website which you can access from desktop or mobile, to decide what timeslots you can meet your friends.</div>
            <div class={styles.app_description}>We bring you high convenience, you don't even need an account to use our services! Just create your room, and share the link to your friends. After all your friends have recorded their schedules, you can decide when you can have a good time!</div>
            <div class="flex flex-col md:flex-row justify-around w-100 mt-4 gap-3">
                <div class="p-3 text-center border-2 border-slate-900 rounded-xl">
                    <TiTick class="w-16 h-16 mx-auto" />
                    <div class="font-bold">Convenience</div>
                    <div class="">Accounts are not needed, just join a room to select your timeslots</div>
                </div>
                <div class="p-3 text-center border-2 border-slate-900 rounded-xl"><HiSolidHandThumbUp class="w-16 h-16 mx-auto" />
                    <div class="font-bold">Ease of Use</div>
                    <div>The design is intuitive and simple, what you see is what you can do</div>
                </div>
                <div class="p-3 text-center border-2 border-slate-900 rounded-xl"><BiSolidDirections class="w-16 h-16 mx-auto" />
                    <div class="font-bold">Flexibility</div>
                    <div>You can edit your timeslot afterwards, because things may not always go on plan</div>
                </div>
            </div>
                
            <A href="/about" class="flex justify-center w-fit mx-auto">
            <button data-modal-target="defaultModal" data-modal-toggle="defaultModal" class="text-center w-auto mt-8 text-white bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800" type="button">
                Implementation
            </button>
            </A>
        </div>
        </>
    );
  };
  
  export default HomePage;
  