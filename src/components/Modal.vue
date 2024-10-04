<template>
    <transition name="modal-animation">
      <div v-show="modalActive" class="modal">
        <transition name="modal-animation-inner">
          <div v-show="modalActive" class="modal-inner">
            <i @click="close" class="far fa-times-circle"></i>
            <!-- Modal Content -->
            <div class=" absolute top-0 right-0">
              <svg @click="close" xmlns="http://www.w3.org/2000/svg" fill="crimson" viewBox="0 0 24 24" stroke-width="2.0"
                stroke="currentColor"  class="w-8 h-8  ">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <slot />
          </div>
        </transition>
      </div>
    </transition>
  </template>
    
  <script>
  export default {
    props: ["modalActive"],
    setup(props, { emit }) {
      const close = () => {
        emit("close");
      };
  
      return { close };
    },
  };
  </script>
    
  <style lang="scss" scoped >
  .modal-animation-enter-active,
  .modal-animation-leave-active {
    transition: opacity 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
  }
  
  .modal-animation-enter-from,
  .modal-animation-leave-to {
    opacity: 0;
  }
  
  .modal-animation-inner-enter-active {
    transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02) 0.15s;
  }
  
  .modal-animation-inner-leave-active {
    transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
  }
  
  .modal-animation-inner-enter-from {
    opacity: 0;
    transform: scale(0.8);
  }
  
  .modal-animation-inner-leave-to {
    transform: scale(0.8);
  }
  
  .modal {
    display:flex;
    justify-content: center;
    // align-items: center;
    height: 100%;
    width: 100%;
  //   position: fixed;
   overflow-y: initial;
    top: 0px;
    background-color: rgb(0, 0, 0, 0.7);
  
    .modal-inner {
      position: relative;
      width: 80%;
      height: 80%;
      top: 0px;
      // box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
      // background-color: #fff;
      padding: 40px 16px;
  
      i {
        position: absolute;
        top: 15px;
        right: 15px;
        font-size: 20px;
        cursor: pointer;
  
        &:hover {
          color: crimson;
        }
      }
  
      button {
        padding: 20px 30px;
        border: none;
        font-size: 16px;
        background-color: crimson;
        color: #fff;
        cursor: pointer;
      }
    }
  }</style>