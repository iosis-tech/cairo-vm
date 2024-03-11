pub mod trace_entry {
    use serde::{Deserialize, Serialize};

    use crate::{
        stdlib::prelude::*,
        types::relocatable::Relocatable,
        vm::errors::{memory_errors::MemoryError, trace_errors::TraceError},
    };

    ///A trace entry for every instruction that was executed.
    ///Holds the register values before the instruction was executed.
    ///Register values for ap & fp are represented as their offsets, as their indexes will always be 1
    #[derive(Debug, PartialEq, Eq, Deserialize, Serialize, Clone)]
    pub struct TraceEntry {
        pub pc: Relocatable,
        pub ap: u64,
        pub fp: u64,
    }

    /// A trace entry for every instruction that was executed.
    /// Holds the register values before the instruction was executed, after going through the relocation process
    #[derive(Debug, PartialEq, Eq, Deserialize, Serialize, Clone)]
    pub struct RelocatedTraceEntry {
        pub pc: u64,
        pub ap: u64,
        pub fp: u64,
    }

    pub fn relocate_trace_register(
        value: Relocatable,
        relocation_table: &Vec<usize>,
    ) -> Result<u64, TraceError> {
        let segment_index: usize = value.segment_index.try_into().map_err(|_| {
            TraceError::MemoryError(MemoryError::AddressInTemporarySegment(value.segment_index))
        })?;

        if relocation_table.len() <= segment_index {
            return Err(TraceError::NoRelocationFound);
        }
        // TODO: usize to u64 conversion
        Ok(relocation_table[segment_index] as u64 + value.offset)
    }
}
