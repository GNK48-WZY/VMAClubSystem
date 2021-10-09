<template>
    <q-page-sticky position="bottom-right" :offset="[18, 18]">
        <q-intersection transition="rotate" once>
            <q-fab icon="add" direction="up" color="accent" vertical-actions-align="right">
                <q-fab-action label-position="left" color="primary" icon="mail" label="Email" />
            </q-fab>
        </q-intersection>
    </q-page-sticky>
</template>
